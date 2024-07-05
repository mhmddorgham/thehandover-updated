import { Session } from "next-auth";

declare type TestimonialCardProps = {
  content: string;
  name: string;
  role: string;
  avatar: string;
};
declare type CreateUserParams = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};
declare type LoginParams = {
  email: string;
  password: string;
};

declare type IPreferencesStep1 = {
  age: string;
  gender: string;
  height: string;
  weight: string;
};
declare type IPreferencesStep2 = {
  colors: string;
  dislikedColors: string;
  usualStyles: string;
  occasions: string;
};
declare type IPreferencesStep3 = {
  preferredBrands: string;
  sizes: string;
  preferredClothingTypes?: string | undefined;
  fabricPreference?: string | undefined;
};
declare type IPreferencesStep4 = {
  pastPurchases: string;
  shoppingFrequency: string;
  monthlyExpenditure: string;
  specificFeatures?: string | undefined;
};
declare type IHeaderProps = {
  loading: boolean;
  session: Session | null;
  status: "authenticated" | "loading" | "unauthenticated";
};

declare type tryOnParams = {
  userImage: string;
  garmentImage: string;
};
declare type sidebarLinksParams =
  | "Home"
  | "savedClothes"
  | "tryOn"
  | "collections";

interface IClientSession extends Session {
  user: {
    name?: string | null;
    email?: string | null;
    image?: string | null;
    isPreferencesDone: boolean;
  };
}
interface IUseSession extends Session {
  data: {
    name?: string | null;
    email?: string | null;
    image?: string | null;
    isPreferencesDone: boolean;
  };
  status: "authenticated" | "loading" | "unauthenticated";
}

declare type IFormFields = z.infer<typeof tryOnSchema>;
declare type exampleObjectParams = {
  name: string;
  image: string;
  id: string;
};
