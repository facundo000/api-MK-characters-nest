import { IsString, Matches, Min, MinLength } from "class-validator";

export class CreateMortalkombatDto {

    @IsString()
    @MinLength(1)
    name: string;

    @IsString()
    @MinLength(5)
    @Matches(/\.(png|jpg|webp|jpeg)$/i, { message: 'no must end with .png, .jpg, or .webp' })
    no: string;
}
