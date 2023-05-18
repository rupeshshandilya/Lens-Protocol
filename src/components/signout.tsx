import { useWalletLogout } from '@lens-protocol/react-web';
import { useRouter } from 'next/router';

function LogoutButton() {
  const { execute: logout, isPending } = useWalletLogout();
  const router = useRouter();
  
  return (
    <button disabled={isPending} onClick={
        () => {
            logout
            router.push('/')
        }

    }>Log out</button>
  );
}

export default LogoutButton;