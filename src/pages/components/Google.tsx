import React from 'react';
import { GoogleLogin } from 'react-google-login';

interface GoogleLoginButtonProps {
  onSuccess: (accessToken: string) => void;
  onFailure: () => void;
}

const GoogleLoginButton: React.FC<GoogleLoginButtonProps> = ({ onSuccess, onFailure }) => {
  const responseGoogle = (response: any) => {
    if (response && response.accessToken) {
      onSuccess(response.accessToken);
    } else {
      onFailure();
    }
  };

  return (
    <GoogleLogin
      clientId="358813669174-2v22usu0rirdn4cf9s4n7vrfqbvko4qo.apps.googleusercontent.com"
      buttonText="Login with Google"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy="single_host_origin"
    />
  );
};

export default GoogleLoginButton;