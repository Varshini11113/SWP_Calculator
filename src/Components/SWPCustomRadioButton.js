import {
  Box,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio
} from '@mui/material'

export default function MuiRadioButton({value, setValue})  {
//   const [value, setValue] = useState('1');

  const handleChange = (event) => {   
    setValue(event.target.value);
  }

  return (
    <Box>
      <FormControl>
        <RadioGroup
          name='job-experience-group'
          value={value}
          onChange={handleChange}
          >
          <FormControlLabel
            value='1'
            control={<Radio size='small' 
            sx={{
                marginTop: '-8px',
                color: '#0161FF',
                '&.Mui-checked': {
                  color: '#0161FF', 
                },

              }}
              />}
            label='I want to know how long my investment will last'
            sx={{ 
                alignItems: 'flex-start',
                '& .MuiTypography-root': {
                    fontSize: '14px',
                    fontWeight: value === '1'? 600 : 400, // set font weight of selected label
                    fontFamily: 'poppins',
                  },
             }}
          />
          <FormControlLabel
            value='2'
            control={<Radio size='small' sx={{
                marginTop: '-8px',
                color: '#0161FF',
                '&.Mui-checked': {
                  color: '#0161FF', 
                },
              }}
              />}
            label='I want to know my remaining investment balance after SWP tenure'
            sx={{ 
                alignItems: 'flex-start',
                '& .MuiTypography-root': { 
                    fontSize: '14px',
                    fontWeight: value === '2'? 600 : 400, // set font weight of selected label
                    fontFamily: 'poppins',
                  },
             }}
          />
        </RadioGroup>
      </FormControl>
    </Box>
  )
}