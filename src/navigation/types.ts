// navigation/types.ts
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type PostAuthNavigationParamList = {
    HomeScreen: undefined
    FittingsHDPE: undefined
    AddNewItemScreen: undefined
    ProductDetail: { productId: string }
}

// Use this type for `useNavigation`
export type PostAuthStackNavigationProps = NativeStackScreenProps<PostAuthNavigationParamList>;
