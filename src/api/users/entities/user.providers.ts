import { User } from './user.entity';
import { UserCollectible } from './userCollectible.entity';
import { KarmaPoints } from './karmaPoints.entity';
import { LeaderPoints } from './leaderPoints.entity';

export const UserProviders = [
  {
    provide: "USER",
    useValue: User,
  },
  {
    provide: "USER_COLLECTIBLE",
    useValue: UserCollectible,
  },
  {
    provide: "KARMA_POINTS",
    useValue: KarmaPoints,
  },
  {
    provide: "LEADER_POINTS",
    useValue: LeaderPoints,
  },
]