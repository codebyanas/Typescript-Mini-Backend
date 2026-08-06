import mongoose, { InferSchemaType } from "mongoose";
declare const userSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    email: string;
    password: string;
    name: string;
    lastLogin: NativeDate;
    isVerified: boolean;
    resetPasswordToken?: string | null | undefined;
    resetPasswordExpiresAt?: NativeDate | null | undefined;
    verificationToken?: string | null | undefined;
    verificationTokenExpiresAt?: NativeDate | null | undefined;
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, {
    email: string;
    password: string;
    name: string;
    lastLogin: NativeDate;
    isVerified: boolean;
    resetPasswordToken?: string | null | undefined;
    resetPasswordExpiresAt?: NativeDate | null | undefined;
    verificationToken?: string | null | undefined;
    verificationTokenExpiresAt?: NativeDate | null | undefined;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, Omit<mongoose.DefaultSchemaOptions, "timestamps"> & {
    timestamps: true;
}> & Omit<{
    email: string;
    password: string;
    name: string;
    lastLogin: NativeDate;
    isVerified: boolean;
    resetPasswordToken?: string | null | undefined;
    resetPasswordExpiresAt?: NativeDate | null | undefined;
    verificationToken?: string | null | undefined;
    verificationTokenExpiresAt?: NativeDate | null | undefined;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, unknown, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
    email: string;
    password: string;
    name: string;
    lastLogin: NativeDate;
    isVerified: boolean;
    resetPasswordToken?: string | null | undefined;
    resetPasswordExpiresAt?: NativeDate | null | undefined;
    verificationToken?: string | null | undefined;
    verificationTokenExpiresAt?: NativeDate | null | undefined;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export type IUser = InferSchemaType<typeof userSchema>;
export declare const User: mongoose.Model<{
    email: string;
    password: string;
    name: string;
    lastLogin: NativeDate;
    isVerified: boolean;
    resetPasswordToken?: string | null | undefined;
    resetPasswordExpiresAt?: NativeDate | null | undefined;
    verificationToken?: string | null | undefined;
    verificationTokenExpiresAt?: NativeDate | null | undefined;
} & mongoose.DefaultTimestampProps, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    email: string;
    password: string;
    name: string;
    lastLogin: NativeDate;
    isVerified: boolean;
    resetPasswordToken?: string | null | undefined;
    resetPasswordExpiresAt?: NativeDate | null | undefined;
    verificationToken?: string | null | undefined;
    verificationTokenExpiresAt?: NativeDate | null | undefined;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
}> & Omit<{
    email: string;
    password: string;
    name: string;
    lastLogin: NativeDate;
    isVerified: boolean;
    resetPasswordToken?: string | null | undefined;
    resetPasswordExpiresAt?: NativeDate | null | undefined;
    verificationToken?: string | null | undefined;
    verificationTokenExpiresAt?: NativeDate | null | undefined;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    email: string;
    password: string;
    name: string;
    lastLogin: NativeDate;
    isVerified: boolean;
    resetPasswordToken?: string | null | undefined;
    resetPasswordExpiresAt?: NativeDate | null | undefined;
    verificationToken?: string | null | undefined;
    verificationTokenExpiresAt?: NativeDate | null | undefined;
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, {
    email: string;
    password: string;
    name: string;
    lastLogin: NativeDate;
    isVerified: boolean;
    resetPasswordToken?: string | null | undefined;
    resetPasswordExpiresAt?: NativeDate | null | undefined;
    verificationToken?: string | null | undefined;
    verificationTokenExpiresAt?: NativeDate | null | undefined;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, Omit<mongoose.DefaultSchemaOptions, "timestamps"> & {
    timestamps: true;
}> & Omit<{
    email: string;
    password: string;
    name: string;
    lastLogin: NativeDate;
    isVerified: boolean;
    resetPasswordToken?: string | null | undefined;
    resetPasswordExpiresAt?: NativeDate | null | undefined;
    verificationToken?: string | null | undefined;
    verificationTokenExpiresAt?: NativeDate | null | undefined;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, unknown, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
    email: string;
    password: string;
    name: string;
    lastLogin: NativeDate;
    isVerified: boolean;
    resetPasswordToken?: string | null | undefined;
    resetPasswordExpiresAt?: NativeDate | null | undefined;
    verificationToken?: string | null | undefined;
    verificationTokenExpiresAt?: NativeDate | null | undefined;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
    email: string;
    password: string;
    name: string;
    lastLogin: NativeDate;
    isVerified: boolean;
    resetPasswordToken?: string | null | undefined;
    resetPasswordExpiresAt?: NativeDate | null | undefined;
    verificationToken?: string | null | undefined;
    verificationTokenExpiresAt?: NativeDate | null | undefined;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export {};
//# sourceMappingURL=userModel.d.ts.map