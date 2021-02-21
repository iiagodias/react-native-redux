import React from 'react';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import OptionsMenu from 'react-native-option-menu';
import { useDispatch, useSelector } from 'react-redux';
import { Creators as AuthActions } from '../../stores/ducks/user';
import { Container, ContainerLoading, Image, Loading } from './styles';

const Avatar = () => {
  const dispatch = useDispatch();
  const { AvatarUpdateRequest, AvatarDeleteRequest } = AuthActions;
  const { loadingAvatar } = useSelector((state) => state.user);
  const { data } = useSelector((state) => state.auth);
  const optionImagem = {
    mediaType: 'photo'
  };

  const OpenGallery = () => {
    launchImageLibrary(optionImagem, (response) => {
      if (!response.didCancel) {
        dispatch(AvatarUpdateRequest(response));
      }
    });
  };

  const OpenCamera = () => {
    launchCamera(optionImagem, (response) => {
      if (!response.didCancel) {
        dispatch(AvatarUpdateRequest(response));
      }
    });
  };

  const deleteAvatar = () => {
    dispatch(AvatarDeleteRequest());
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
        {loadingAvatar && (
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
      destructiveIndex={3}
      options={['Abrir câmera', 'Abrir galeria', 'Apagar foto', 'Cancelar']}
      actions={[OpenCamera, OpenGallery, deleteAvatar]}
    />
  );
};

export default Avatar;
