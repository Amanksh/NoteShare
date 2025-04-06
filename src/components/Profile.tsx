import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

import { useEffect } from "react";
import { Label } from "./ui/label";

const Profile = () => {
  const { user } = useAuth0();
  useEffect(() => {
    if (user) {
      const sendUserData = async () => {
        try {
          const response = await axios.post("http://localhost:8000/user", {
            email: user.email,
            name: user.name,
          });
          console.log(response);
        } catch (error) {
          console.error("Error sending user data", error);
        }
      };

      sendUserData();
    }
  }, []);

  return (
    <div className="w-[80%] flex justify-center mx-auto mt-10">
      <Tabs defaultValue="account" className="w-[600px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="account">Profile</TabsTrigger>
          <TabsTrigger value="password">Settings</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <Card>
            <CardHeader>
              <CardTitle>Account</CardTitle>
              <CardDescription>
                Make changes to your account here. Click save when you're done.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  defaultValue="Pedro Duarte"
                  value={user?.name}
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="username">Email</Label>
                <Input
                  id="email"
                  defaultValue="@peduarte"
                  value={user?.email}
                />
              </div>
            </CardContent>
            <CardFooter>
              <button className="btn btn-primary">Save changes</button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="password">
          <Card>
            <CardHeader>
              <CardTitle>Password</CardTitle>
              <CardDescription>
                Change your password here. After saving, you'll be logged out.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="current">Current password</Label>
                <Input id="current" type="password" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="new">New password</Label>
                <Input id="new" type="password" />
              </div>
            </CardContent>
            <CardFooter>
              <button className="btn btn-primary">Save password</button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Profile;
