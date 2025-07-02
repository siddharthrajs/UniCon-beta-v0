"use client";
import React, { useEffect, useState } from 'react';
import { ProfileCard } from '@/components/profile-card';
import { createClient } from '@/lib/client';

const Friends = () => {
  const [profiles, setProfiles] = useState<UserProfile[]>([]);
  type UserProfile = {
    id: string;
    avatar?: string;
    handle?: string;
    name?: string;
    bio?: string;
    height?: string;
    branch?: string;
    interests?: string[] | string;
    gender?: string;
    year?: string;
    email?: string;
    is_verified?: boolean;
    [key: string]: any;
  };

  useEffect(() => {
    const fetchProfiles = async () => {
      const supabase = createClient();
      const { data } = await supabase
        .from('profiles')
        .select('id, handle, name, avatar')
        .neq('id', (await supabase.auth.getUser()).data.user?.id); // Exclude self
      setProfiles((data as UserProfile[]) || []);
    };
    fetchProfiles();
  }, []);

  return (
    <div className="flex flex-wrap gap-6 p-6 justify-center">
      {profiles.map((profile: UserProfile, idx: number) => (
        <ProfileCard
          key={profile.id || idx}
          user={{
            id: profile.id,
            avatarUrl: profile.avatar || '/avatar.png',
            username: profile.handle || 'unknown',
            name: profile.name || profile.handle || 'unknown',
            bio: profile.bio || '',
            height: profile.height || '',
            branch: profile.branch || '',
            interests: profile.interests ? (Array.isArray(profile.interests) ? profile.interests : typeof profile.interests === 'string' ? profile.interests.split(',') : []) : [],
            gender: profile.gender || '',
            year: profile.year || '',
            handle: profile.handle,
            email: profile.email || '',
            is_verified: !!profile.is_verified,
          }}
        />
      ))}
    </div>
  );
};

export default Friends;

