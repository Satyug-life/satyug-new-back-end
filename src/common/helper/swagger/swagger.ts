import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
export const configSwagger = new DocumentBuilder()
  .setTitle('🧑‍🏫 E M A I L ✫ S E R V I C E 🚀')
  .setDescription('♗ ChronCept Application')
  .setVersion('1.0')
  .addTag('Emails')
  .build();
