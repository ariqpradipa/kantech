"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';


export default function Page() {
  const router = useRouter();
  const [role, setRole] = useState(null);

  useEffect(() => {

    if (role === null) {
      getRole();
    }

    console.log(role)

    try {
      // Redirect based on role
      if (role === 'customer') {
        router.push('/user/explore');
      } else if (role === 'vendor') {
        router.push('/vendor/menu');
      } else {
        router.push('/user/auth/login');
      }
    } catch (error) {
      console.error('Error verifying JWT:', error);
      // Handle invalid token, etc.
      router.push('/user/auth/login');
    }
  }, [router, role]);

  const getRole = async () => {

    const response = await fetch("/api/auth/jwt", {
      method: "GET",
      credentials: "include",
    });

    if (response.ok) {

      const role = await response.json();
      setRole(role)

    } else {

      const role = await response.json();
      setRole(role)

    }
  }
}