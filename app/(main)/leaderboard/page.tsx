import Image from 'next/image';
import { redirect } from 'next/navigation';

import { FeedWrapper } from '@/components/feed-wrapper';
import { Promo } from '@/components/promo';
import { Quests } from '@/components/quests';
import { StickyWrapper } from '@/components/sticky-wrapper';
import { Separator } from '@/components/ui/separator';
import { UserProgress } from '@/components/user-progress';
import { getTopTenUsers, getUserProgress, getUserSubscription } from '@/db/queries';

import { Leaderboard } from './_components/leaderboard';

const LeaderboardPage = async () => {
  const userProgressData = getUserProgress();
  const userSubscriptionData = getUserSubscription();
  const topTenUsersData = getTopTenUsers();

  const [userProgress, userSubscription, topTenUser] = await Promise.all([
    userProgressData,
    userSubscriptionData,
    topTenUsersData
  ]);

  if (!userProgress || !userProgress.activeCourse) {
    redirect('/courses');
  }

  const isPro = !!userSubscription?.isActive;

  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <StickyWrapper>
        <UserProgress
          activeCourse={userProgress.activeCourse}
          hearts={userProgress.hearts}
          points={userProgress.points}
          hasActiveSubscription={isPro}
        />
        {!isPro && <Promo />}
        <Quests points={userProgress.points} />
      </StickyWrapper>
      <FeedWrapper>
        <div className="w-full flex flex-col items-center">
          <Image src="/leaderboard.svg" alt="Leaderboard" width={100} height={100} />
          <h1 className="text-center font-bold text-neutral-800 text-2xl my-6">Leaderboard</h1>
          <p className="text-muted-foreground text-center text-lg mb-6">
            See where you stand among other learners!
          </p>
          <Separator className="mb-4 h-0.5 rounded-full" />
          {topTenUser.map((userProgress, index) => (
            <Leaderboard key={userProgress.userId} userProgress={userProgress} index={index} />
          ))}
        </div>
      </FeedWrapper>
    </div>
  );
};

export default LeaderboardPage;
