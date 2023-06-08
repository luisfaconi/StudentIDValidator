export const REGISTER_DEPARTURE = 'REGISTER_DEPARTURE';
export const REGISTER_RETURN = 'REGISTER_RETURN';

export const registerDeparture = (id, departureDate, departureTime) => {
    return {
      type: REGISTER_DEPARTURE,
      payload: {
        id,
        departureDate,
        departureTime,
      },
    };
  };
  
  export const registerReturn = (id, returnTime) => {
    return {
      type: REGISTER_RETURN,
      payload: {
        id,
        returnTime,
      },
    };
  };
  