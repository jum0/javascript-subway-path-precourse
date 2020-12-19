import { LineModel } from "../model/Line.js";
import { Constant, ErrorMessage } from "./constant.js";

export const StationValidation = {
  isValidDepartureStation(station) {
    if (!this.isThereStation(station)) {
      return;
    }

    return this.hasValidName(station);
  },

  hasValidName(name) {
    if (!this.hasOnlyKoreanAlphabet(name)) {
      alert(ErrorMessage.ONLY_KOREAN_ALPHABET);

      return;
    }

    if (!this.hasMinimumLength(name)) {
      alert(ErrorMessage.MINIMUM_LENGTH);

      return;
    }

    return true;
  },

  hasOnlyKoreanAlphabet(name) {
    return Constant.REGEX_CATCHING_KOREAN_ALPHABET.test(name);
  },

  hasMinimumLength(name) {
    return name.length >= Constant.MINIMUM_NAME_LENGTH;
  },

  isThereStation(name) {
    if (!LineModel.listAllStationsSet().has(name)) {
      alert(ErrorMessage.STATION_IS_NOT_THERE);

      return;
    }

    return true;
  },
};
