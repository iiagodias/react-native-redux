import React from 'react';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import OptionsMenu from 'react-native-option-menu';
import { useDispatch, useSelector } from 'react-redux';
import { Creators as AuthActions } from '../../stores/ducks/user';
import { Container, ContainerLoading, Image, Loading } from './styles';

const Avatar = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.user);
  const { data } = useSelector((state) => state.auth);
  const { AvatarUpdateRequest } = AuthActions;
  const optionImagem = {
    mediaType: 'photo'
  };

  const OpenGallery = () => {
    launchImageLibrary(optionImagem, (response) => {
      dispatch(AvatarUpdateRequest(response));
    });
  };

  const OpenCamera = () => {
    launchCamera(optionImagem, (response) => {
      dispatch(AvatarUpdateRequest(response));
    });
  };

  const RenderAvatar = () => (
    <Container>
      <Image
        source={{
          uri: `https://api-nodejs-todolist.herokuapp.com/user/${
            data._id
          }/avatar?v=${Date.now()}`,
          cache: 'reload'
        }}
      >
        {loading && (
          <ContainerLoading>
            <Loading />
          </ContainerLoading>
        )}
      </Image>
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
