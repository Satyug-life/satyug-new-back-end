import { Module } from "@nestjs/common";
import { RabbitMqService } from "./rabbit-mq.service";
import { ClientsModule, Transport } from "@nestjs/microservices";

@Module({
  imports: [
    // ClientsModule.register([
    //   {
    //     name: "EMAIL_SERVICE",
    //     transport: Transport.RMQ,
    //     options: {
    //       urls: [process.env.RABBIT_MQ],
    //       queue: process.env.EMAIL_QUEUE,
    //       queueOptions: {
    //         durable: true,
    //       },
    //       noAck: false,
    //     },
    //   },
    // ]),
  ],
  controllers: [],
  exports: [RabbitMqService],
  providers: [RabbitMqService],
})
export class RabbitMqModule {}
