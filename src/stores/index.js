import AsyncStorage from '@react-native-async-storage/async-storage';
import omit from 'lodash/omit';
import { applyMiddleware, createStore } from 'redux';
import { createTransform, persistReducer, persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import reducers from './ducks';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

const blacklistPaths = ['auth.loading'];

const persistedReducer = persistReducer(
  {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['auth'],
    blacklist: blacklistPaths.filter((a) => !a.includes('.')),
    transforms: [
      createTransform((inboundState, key) => {
        const blackListPathForKey = blacklistPaths
          .filter((path) => path.startsWith(`${key}.`))
          .map((path) => path.substr(key.length + 1));
        return omit(inboundState, ...blackListPathForKey);
      }, null)
    ]
  },

  reducers
);

const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));
const persistor = persistStore(store);

sagaMiddleware.run(sagas);

export { store, persistor };
