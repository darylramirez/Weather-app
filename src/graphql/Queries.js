import {gql} from '@apollo/client'

export const GET_WEATHER_QUERY = gql`
query getCityByName($name: String!, $config: ConfigInput){
    getCityByName(name: $name, config: $config) {
    name
    country
    weather{
      summary{
      title
      description
        icon
      }
      temperature{
        actual
        feelsLike
        min
        max
      }
      wind{
        speed
        deg
      }
      clouds{
        all
        visibility
        humidity
      }
      timestamp
    }
  }
  }
`