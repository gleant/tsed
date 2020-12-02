import {OpenSpecHash, OS2Schema, OS3Schema} from "@tsed/openspec";
import {SpecTypes} from "../domain/SpecTypes";

export interface JsonSchemaOptions {
  /**
   * Map properties with the alias name. By default: false
   */
  useAlias?: boolean;
  /**
   * Reference to Schema Object.
   */
  schemas?: OpenSpecHash<OS3Schema | OS2Schema>;
  /**
   * Define Spec types level
   */
  specType?: SpecTypes;
  /**
   * Define a groups restriction to generate the JsonSchema.
   * Set false to disable groups.
   */
  groups?: string[] | false;

  [key: string]: any;
}
