import { registerEnumType } from "type-graphql";

export enum PersonGender {
  MALE,
  FEMALE
}

registerEnumType(PersonGender, {
  name: "PersonGender"
});
