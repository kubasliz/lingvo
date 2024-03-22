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
import { useExitModal } from '@/store/use-exit-modal';

export const ExitModal = () => {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const { isOpen, close } = useExitModal();

  useEffect(() => setIsClient(true), []);

  if (!isClient) {
    return null;
  }

  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <div className="flex items-center justify-center w-full mb-5">
            <Image src="/mascot_sad.svg" alt="Sad mascot" width={100} height={100} />
          </div>
          <DialogTitle className="text-center font-bold text-2xl">Wait, don&apos;t go!</DialogTitle>
          <DialogDescription className="text-center text-sm">
            Are you sure you want to leave this page?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="mb-4">
          <div className="flex flex-col gap-y-4 w-full">
            <Button onClick={close} variant="primary" className="w-full" size="lg">
              Keep learning
            </Button>
            <Button
              onClick={() => {
                close();
                router.push('/learn');
              }}
              variant="dangerOutline"
              className="w-full"
              size="lg"
            >
              End session
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
