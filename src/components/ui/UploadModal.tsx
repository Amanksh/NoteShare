import axios from "axios";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "react-hot-toast";
import { Progress } from "@radix-ui/react-progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function UploadModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [fileName, setFilename] = useState("");
  const [course, setCourse] = useState("");
  const [semester, setSemester] = useState("");
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleUpload = async () => {
    if (!file || !fileName || !course || !semester) {
      toast.error("All fields are required");
      return;
    }
    const resetForm = () => {
      setFile(null);
      setFilename("");
      setCourse("");
      setSemester("");
    };

    const formData = new FormData();
    formData.append("pdf", file);
    formData.append("fileName", fileName);
    formData.append("course", course);
    formData.append("semester", semester);

    setUploading(true);
    setProgress(0);
    try {
      const response = await axios.post(
        "https://notes-api-1wbs.onrender.com/notes",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          onUploadProgress: (progressEvent) => {
            const percent = Math.round(
              (progressEvent.loaded * 100) / (progressEvent.total || 1)
            );
            setProgress(percent);
          },
        }
      );
      const data = response.data;
      if (data.fileUrl) {
        console.log(data);
        toast.success("Uploaded Successfully!");
        setIsOpen(false);
        resetForm();
      } else {
        toast.error(data.error);
      }
    } catch (err) {
      console.error(err);
      toast.error("Error uploading file");
    } finally {
      setUploading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button onClick={() => setIsOpen(true)} className="btn btn-outline">
          Upload PDF
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md text-black  ">
        <DialogHeader>
          <DialogTitle className="text-black">Upload Notes</DialogTitle>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div>
            <Label htmlFor="file" className="text-black">
              File
            </Label>
            <Input
              type="file"
              accept="application/pdf"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
            />
          </div>

          <div>
            <Label htmlFor="filename">File Name</Label>
            <Input
              id="filename"
              placeholder="Intro_to_AI.pdf"
              value={fileName}
              onChange={(e) => setFilename(e.target.value)}
            />
          </div>

          <div>
            <Label>Course</Label>
            <Select onValueChange={setCourse}>
              <SelectTrigger>
                <SelectValue placeholder="Select course" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="B.Tech CSE">B.Tech CSE</SelectItem>
                <SelectItem value="B.Tech ECE">B.Tech ECE</SelectItem>
                <SelectItem value="B.Tech ME">B.Tech ME</SelectItem>
                <SelectItem value="B.Sc Physics">B.Sc Physics</SelectItem>
                <SelectItem value="MBA">MBA</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label>Semester</Label>
            <Select onValueChange={setSemester}>
              <SelectTrigger>
                <SelectValue placeholder="Select semester" />
              </SelectTrigger>
              <SelectContent>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((sem) => (
                  <SelectItem key={sem} value={sem.toString()}>
                    {sem} Semester
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          {uploading && (
            <div className="mt-2">
              <Progress value={progress} className="h-2" />
              <p className="text-sm text-gray-500 mt-1">{progress}% uploaded</p>
            </div>
          )}
        </div>

        <DialogFooter>
          <Button onClick={handleUpload} disabled={uploading || !file}>
            {uploading ? "Uploading..." : "Upload"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
