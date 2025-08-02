import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Trophy, Star, User } from "lucide-react";

const CodingProfilesSection = () => {
  const profiles = [
    {
      name: "CodeForces",
      username: "reikc",
      rating: 1276,
      badge: "Pupil",
      icon: <Code2 className="w-4 h-4 text-coding-codeforces" />,
      badgeColor: "bg-coding-codeforces text-black",
      url: "https://codeforces.com/profile/reikc"
    },
    {
      name: "CodeChef",
      username: "ruethewhirl",
      rating: 1627,
      badge: "3★",
      icon: <Trophy className="w-4 h-4 text-coding-codechef" />,
      badgeColor: "bg-coding-codechef text-black",
      url: "https://www.codechef.com/users/ruethewhirl"
    },
    {
      name: "LeetCode",
      username: "reni48",
      rating: null,
      badge: null,
      icon: <Star className="w-4 h-4 text-coding-leetcode" />,
      badgeColor: null,
      url: "https://leetcode.com/u/reni48/"
    },
    {
      name: "AtCoder",
      username: "reikc",
      rating: 295,
      badge: null,
      icon: <User className="w-4 h-4 text-coding-atcoder" />,
      badgeColor: null,
      url: "https://atcoder.jp/users/reikc"
    }
  ];

  return (
    <Card className="w-full max-w-md mx-auto p-6 border-2 border-border profile-glow hover:shadow-lg hover:scale-[1.02] transition-all duration-300 cursor-pointer">
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-center text-foreground">Coding Profiles</h2>
        
        <div className="space-y-4">
          {profiles.map((profile) => (
            <a
              key={profile.name}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted/70 transition-all duration-200 cursor-pointer click-animate hover:transform hover:scale-[1.02]"
            >
              <div className="flex-shrink-0">
                {profile.icon}
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-foreground">{profile.name}:</span>
                  <span className="text-sm text-muted-foreground font-mono username-highlight px-1 py-0.5 rounded">{profile.username}</span>
                </div>
                
                <div className="flex items-center gap-2 mt-1">
                  {profile.badge && (
                    <Badge className={`text-xs px-2 py-0.5 ${profile.badgeColor}`}>
                      {profile.badge}
                    </Badge>
                  )}
                  {profile.rating && (
                    <span className="text-sm text-muted-foreground">
                      Rating: {profile.rating}
                    </span>
                  )}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default CodingProfilesSection;