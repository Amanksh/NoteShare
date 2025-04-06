import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";

interface FileData {
  originalName: string;
  fileName: string;
  course: string;
  semester: number;
  fileUrl: string;
  size: number;
  mimetype: string;
  uploadedAt: string;
}

interface FileCardProps {
  file: FileData;
}

export default function FileCard({ file }: FileCardProps) {
  const readableSize = (bytes: number) => {
    const sizes = ["Bytes", "KB", "MB", "GB"];
    if (bytes === 0) return "0 Byte";
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    return `${(bytes / Math.pow(1024, i)).toFixed(2)} ${sizes[i]}`;
  };

  const formattedDate = new Date(file.uploadedAt).toLocaleString();

  return (
    <Card className="w-full max-w-md shadow-xl border border-gray-200">
      <CardHeader className="flex items-center gap-3">
        <FileText className="text-blue-600" size={28} />
        <div className="space-y-1">
          <CardTitle className="text-lg font-semibold">
            {file.originalName}
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            {file.course} — Sem {file.semester}
          </p>
        </div>
      </CardHeader>

      <CardContent className="text-sm text-gray-600 space-y-2">
        <p>
          <strong>File Type:</strong> {file.mimetype}
        </p>
        <p>
          <strong>Size:</strong> {readableSize(file.size)}
        </p>
        <p>
          <strong>Uploaded At:</strong> {formattedDate}
        </p>
      </CardContent>

      <CardFooter>
        <a
          href={file.fileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full"
        >
          <Button
            variant="outline"
            className="w-full flex justify-center gap-2"
          >
            <Download size={16} />
            Download
          </Button>
        </a>
      </CardFooter>
    </Card>
  );
}
