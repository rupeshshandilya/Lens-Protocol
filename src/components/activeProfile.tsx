import { useActiveProfileSwitch, useActiveProfile, useProfilesOwnedByMe, useWalletLogin, useActiveWallet } from '@lens-protocol/react-web';

function ProfileSwitcher() {
  const { data: activeProfile } = useActiveProfile();
  const { execute: switchActiveProfile, isPending } = useActiveProfileSwitch();
  const { data: profiles, error, loading } = useProfilesOwnedByMe();

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <p>Active profile: {activeProfile?.handle}</p>
      <ul>
        {profiles.map((profile) => (
          <li key={profile.id}>
            <button
              disabled={isPending || activeProfile?.id === profile.id}
              onClick={() => {
                switchActiveProfile(profile.id);
              }}
            >
              {profile.handle}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProfileSwitcher;