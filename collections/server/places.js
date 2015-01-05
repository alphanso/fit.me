Places.permit('insert').apply();
Places._ensureIndex({category: 1, loc: "2dsphere"});