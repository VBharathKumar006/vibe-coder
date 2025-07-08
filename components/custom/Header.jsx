'use client';
import Image from 'next/image';
import React, { useContext, useState } from 'react'; // Import useState
import { Button } from '../ui/button';
import Colors from '@/data/Colors';
import { UserDetailContext } from '@/context/UserDetailContext';
import Link from 'next/link';
import { Download, Rocket } from 'lucide-react';
import { useSidebar } from '../ui/sidebar';
import { usePathname } from 'next/navigation';
import { ActionContext } from '@/context/ActionContext';
import SignInDialog from './SignInDialog'; // Import SignInDialog

function Header() {
  const { userDetail, setUserDetail } = useContext(UserDetailContext);
  const { action, setAction } = useContext(ActionContext);
  const { toggleSidebar } = useSidebar();
  const pathname = usePathname();
  const [openSignInDialog, setOpenSignInDialog] = useState(false); // State for SignInDialog

  const onActionBtn =(actn) => {
    setAction({
      actionType: actn,
      timeStamp: Date.now()
    })
    
  }

  return (
    <div className="p-4 flex justify-between items-center">
      <Link href={'/'}>
        <Image src={'/logo.png'} alt="logo" width={40} height={40} />
      </Link>
      {!userDetail?.name ? (
        <div className="flex gap-5">
          <Button variant="ghost" onClick={() => setOpenSignInDialog(true)}>Sign In</Button> {/* Open dialog on click */}
          <Button
            className="text-white"
            style={{
              backgroundColor: Colors.BLUE,
            }}
            onClick={() => setOpenSignInDialog(true)} // Also open dialog for "Get Started"
          >
            Get Started
          </Button>
        </div>
      ) : (
        <div className="flex gap-5 items-center">
          {pathname.includes('/workspace/') && (
            <>
              <Button variant="ghost" onClick={() => onActionBtn('export')}>
                <Download /> Export
              </Button>
              <Button
                onClick={() => onActionBtn('deploy')}
                className="text-white"
                style={{
                  backgroundColor: Colors.BLUE,
                }}
              >
                <Rocket /> Deploy
              </Button>
            </>
          )}
          {userDetail && (
            <Image
              onClick={toggleSidebar}
              src={userDetail?.picture}
              alt="userImage"
              width={40}
              height={40}
              className="rounded-full cursor-pointer object-cover"
            />
          )}
        </div>
      )}

      {/* Render SignInDialog */}
      <SignInDialog
        openDialog={openSignInDialog}
        closeDialog={setOpenSignInDialog}
      />
    </div>
  );
}

export default Header;
