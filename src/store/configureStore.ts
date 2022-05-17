import { AsyncThunk, configureStore } from '@reduxjs/toolkit'
import { persistStore, Persistor } from 'redux-persist'
import {rootReducer} from './rootReducer'


const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }),
})

if (process.env.NODE_ENV === 'development' && (module as any).hot) {
  // tslint:disable-next-line
  ;(module as any).hot.accept('./rootReducer', () => {
    const newRootReducer = require('./rootReducer').default
    store.replaceReducer(newRootReducer)
  })
}

const persistor: Persistor = persistStore(store)

type RootState = ReturnType<typeof rootReducer>
type AppDispatch = typeof store.dispatch
type ThunkApiConfig = {
  state: RootState
  dispatch: AppDispatch
  rejectValue: unknown
}

type AppThunk<Returned = void, ThunkArg = void> = AsyncThunk<
  Returned,
  ThunkArg,
  ThunkApiConfig
>

export {store, persistor}
export type { RootState, AppDispatch, AppThunk }

