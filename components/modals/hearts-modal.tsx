'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog';
import { useHeartsModal } from '@/store/use-hearts-modal';

export const HeartsModal = () => {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const { isOpen, close } = useHeartsModal();

  const onClick = () => {
    close();
    router.push('/shop');
  };

  useEffect(() => setIsClient(true), []);

  if (!isClient) {
    return null;
  }

  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <div className="flex items-center justify-center w-full mb-5">
            <Image src="/mascot_bad.svg" alt="Sad mascot" width={100} height={100} />
          </div>
          <DialogTitle className="text-center font-bold text-2xl">
            You ran out of hearts!
          </DialogTitle>
          <DialogDescription className="text-center text-sm">
            Get Pro for unlimited hearts and more! Or purchase more hearts in the store.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="mb-4">
          <div className="flex flex-col gap-y-4 w-full">
            <Button onClick={onClick} variant="primary" className="w-full" size="lg">
              Get unlimited hearts
            </Button>
            <Button onClick={close} variant="primaryOutline" className="w-full" size="lg">
              No thanks
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
