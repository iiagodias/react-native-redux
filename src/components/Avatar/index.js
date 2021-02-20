import React from 'react';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import OptionsMenu from 'react-native-option-menu';
import { Container, Image } from './styles';

const Avatar = () => {
  const optionImagem = {
    mediaType: 'photo'
  };

  const OpenGallery = () => {
    launchImageLibrary(optionImagem, async (response) => {
      console.log(response);
    });
  };

  const OpenCamera = () => {
    launchCamera(optionImagem, async (response) => {
      console.log(response);
    });
  };

  const RenderAvatar = () => (
    <Container>
      <Image
        source={{
          uri:
            'https://api-nodejs-todolist.herokuapp.com/user/6008cc3e5ab46f0017b8f64e/avatar',
          cache: 'reload'
        }}
      />
    </Container>
  );

  return (
    <OptionsMenu
      customButton={RenderAvatar()}
      destructiveIndex={2}
      options={['Abrir câmera', 'Abrir galeria', 'Cancelar']}
      actions={[OpenCamera, OpenGallery]}
    />
  );
};

export default Avatar;
