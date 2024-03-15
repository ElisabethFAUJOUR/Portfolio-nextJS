import BackButton from '@/components/backButton/BackButton';

function NotFound() {
  return (
    <div className="error">
      <h1 className="error-title">404 - Page non trouvée</h1>
      <p className="error-text">Tiens, il semble que tu te sois perdu.</p>
      <BackButton />
    </div>
  );
}

export default NotFound;
