/* eslint-disable prefer-destructuring */
/* eslint-disable no-param-reassign */
/* eslint-disable arrow-parens */
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Doctor, Patient} from '../../types';

export interface RegisterState {
  patientData: Patient;
  doctorData: Doctor;
}

const initialState: RegisterState = {
  patientData: {
    email: '',
    password: '',
    name: '',
    address: '',
    dob: '',
  },
  doctorData: {
    email: '',
    password: '',
    name: '',
    address: '',
    area: '',
  },
};

export const RegisterReducer = createSlice({
  name: 'register',
  initialState,
  reducers: {
    setPatientRegistrationData: (
      state,
      action: {
        payload: [string, string];
        type: string;
      },
    ) => {
      state.patientData[action.payload[0]] = action.payload[1];
    },
    setDoctorRegistrationData: (
      state,
      action: {
        payload: [string, string];
        type: string;
      },
    ) => {
      state.patientData[action.payload[0]] = action.payload[1];
    },
  },
});

// Action creators are generated for each case reducer function
export const {setPatientRegistrationData, setDoctorRegistrationData} =
  RegisterReducer.actions;

export default RegisterReducer.reducer;
