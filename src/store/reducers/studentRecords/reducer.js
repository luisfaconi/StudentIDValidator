import { REGISTER_DEPARTURE, REGISTER_RETURN } from './actions';

const initialState = {
    studentRecords: [],
  };
  
  const studentRecordsReducer = (state = initialState, action) => {
    switch (action.type) {
      case REGISTER_DEPARTURE:
        return {
          ...state,
          studentRecords: [
            ...state.studentRecords,
            {
              id: action.payload.id,
              departureDate: action.payload.departureDate,
              departureTime: action.payload.departureTime,
              returnTime: null,
            },
          ],
        };
      case REGISTER_RETURN:
        return {
          ...state,
          studentRecords: state.studentRecords.map((record) =>
            record.id === action.payload.id
              ? { ...record, returnTime: action.payload.returnTime }
              : record
          ),
        };
      default:
        return state;
    }
  };
  
  export default studentRecordsReducer;
  