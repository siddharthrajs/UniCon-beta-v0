import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Heart, Briefcase, Venus, Mars } from "lucide-react";

interface UserCardProps {
  type: "love" | "collaborate";
  avatarUrl: string;
  username: string;
  gender: "male" | "female";
  bio: string;
  branch: string;
  year: string;
  interests: string[];
}

export function UserCard({
  type,
  avatarUrl,
  username,
  gender,
  bio,
  branch,
  year,
  interests,
}: UserCardProps) {
  return (
    <Card className="w-full max-w-sm rounded-2xl bg-gray-900/50 p-6 text-white shadow-lg backdrop-blur-lg">
      <CardContent className="p-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Avatar className="h-16 w-16">
              <AvatarImage src={avatarUrl} alt={username} />
              <AvatarFallback>{username.charAt(0)}</AvatarFallback>
            </Avatar>
            <h2 className="text-2xl font-bold">{username}</h2>
          </div>
          {gender === "female" ? (
            <Venus className="h-8 w-8 text-pink-400" />
          ) : (
            <Mars className="h-8 w-8 text-blue-400" />
          )}
        </div>
        <p className="mt-4 text-gray-400">{bio}</p>
        <Separator className="my-4 bg-gray-700" />
        <div className="flex items-center text-gray-400">
          <span>{branch}</span>
          <Separator orientation="vertical" className="mx-4 h-4 bg-gray-700" />
          <span>{year}</span>
        </div>
        <Separator className="my-4 bg-gray-700" />
        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {interests.slice(0, 3).map((interest) => (
              <Badge key={interest} variant="secondary" className="bg-gray-800 text-white">
                {interest}
              </Badge>
            ))}
          </div>
          {type === "love" ? (
            <Button className="rounded-full bg-blue-500 px-6 py-2 text-white hover:bg-blue-600">
              <Heart className="mr-2 h-4 w-4" /> Connect
            </Button>
          ) : (
            <Button className="rounded-full bg-green-500 px-6 py-2 text-white hover:bg-green-600">
              <Briefcase className="mr-2 h-4 w-4" /> Collaborate
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}