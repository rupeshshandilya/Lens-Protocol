import { useActiveWallet } from "@lens-protocol/react-web";
import {LoginButton}  from "./signin";
import LogoutButton from "./signout";

function Authentication() {
  const { data: wallet, loading } = useActiveWallet();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (wallet) {
    return(
        <>
    <p>You are logged-in with {wallet.address}</p>;
    <LogoutButton/>
        </>
    );
  }

  return(
    <>
  <p>You are logged-out</p>;
  <LoginButton/>
    </>
  );
}

export default Authentication;