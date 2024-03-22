import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { userProgress } from '@/db/schema';

interface LeaderboardProps {
  userProgress: typeof userProgress.$inferInsert;
  index: number;
}

export const Leaderboard = ({ userProgress, index }: LeaderboardProps) => {
  return (
    <div className="flex items-center w-full p-2  px-4 rounded-xl hover:bg-gray-200/50">
      <p className="font-bold text-lime-700 mr-4">{index + 1}</p>
      <Avatar className="ml-3 mr-6">
        <AvatarImage className="object-cover" src={userProgress.userImageSrc} />
        <AvatarFallback>{userProgress?.userName?.[0]?.toUpperCase()}</AvatarFallback>
      </Avatar>
      <p className="font-bold text-neutral-800 flex-1">{userProgress.userName}</p>
      <p className="text-muted-foreground">{userProgress.points} XP</p>
    </div>
  );
};
