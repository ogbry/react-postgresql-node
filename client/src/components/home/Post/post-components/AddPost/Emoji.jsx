import React, { useContext } from "react";
import { GlobalContext } from "../../../../../context/GlobalState";
import { Picker } from 'emoji-mart'
import Box from '@material-ui/core/Box';
import Popover from '@material-ui/core/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import 'emoji-mart/css/emoji-mart.css'
export default function Emoji() {
  const { state, dispatch } = useContext(GlobalContext);
  const { text } = state;
  return (
    <div>
          <PopupState variant="popover" popupId="demo-popup-popover">
            {popupState => (
              <div>
                <SentimentVerySatisfiedIcon  {...bindTrigger(popupState)}/>
                <Popover
                  {...bindPopover(popupState)}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                  }}
                >
                   <Box p={2}>
                   <Picker
                      set="facebook"
                      title="Pick your emoji…"
                      emoji="point_up"
                      onSelect={emoji => dispatch({ type: "FIELD", fieldName: "text", payload: text + emoji.native})}
                   />
                   </Box>
                </Popover>
              </div>
            )}
           </PopupState>
    </div>
  )
}
