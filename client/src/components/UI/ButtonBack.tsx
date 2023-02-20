import { useRouter } from 'next/router';

const ButtonBack = () => {
  const router = useRouter();
  return (
    <button onClick={() => router.back()} className="btn-back btn-fill">
      Назад
    </button>
  );
};

export default ButtonBack;
