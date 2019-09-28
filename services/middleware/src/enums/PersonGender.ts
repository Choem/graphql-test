import { registerEnumType } from "type-graphql";

export enum PersonGender {
  MALE,
  FEMALE,
  APACHE_HELICOPTER
}

registerEnumType(PersonGender, {
  name: "PersonGender"
});