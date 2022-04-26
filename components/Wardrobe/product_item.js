import React from 'react';
import {View, Text, Pressable,Image} from 'react-native';

const top_data=[
        {
          id:1,
          image:require('../../assets/top/top_1_ca_co_sp.png')
        },
        {
          id:2,
          image: require('../../assets/top/top_2_ca_bu.png')
        },
        {
          id:3,
          image: require('../../assets/top/top_3_ca.png')
        },
        {
          id:4,
          image: require('../../assets/top/top_4_co_bu.png')
        },
        {
          id:5,
          image: require('../../assets/top/top_5_co_ca_bu.png')
        },
        {
          id:6,
          image: require('../../assets/top/top_6_ca_co.png')
        },
        {
          id:7,
          image: require('../../assets/top/top_7_ca_sp.png')
        },
        {
          id:8,
          image: require('../../assets/top/top_8_ca_co.png')
        },
        {
          id:9,
          image: require('../../assets/top/top_9_ca_co.png')
        },
        {
          id:10,
          image: require('../../assets/top/top_10_sp.png')
        }
      ];
      const bottomwear_data=[
        {
          id:1,
          image: require('../../assets/bottomwear/bottom_1_ca_co.png')
        },
        {
          id:2,
          image: require('../../assets/bottomwear/bottom_2_ca_co.png')
        },
        {
          id:3,
          image: require('../../assets/bottomwear/bottom_3_ca_sp.png')
        },
        {
          id:4,
          image: require('../../assets/bottomwear/bottom_4_ca_co_bu.png')
        },
        {
          id:5,
          image: require('../../assets/bottomwear/bottom_5_ca_sp.png')
        },
        {
          id:6,
          image: require('../../assets/bottomwear/bottom_6_ca_co_bu.png')
        },
        {
          id:7,
          image: require('../../assets/bottomwear/bottom_7_bu.png')
        },
        {
          id:8,
          image: require('../../assets/bottomwear/bottom_8_ca_bu.png')
        }
        
      ];
      const dress_data=[
        {
          id:1,
          image:require('../../assets/dress/dress_1_ca_co_bu.png')
        },
        {
          id:2,
          image: require('../../assets/dress/dress_2_ca_co.png')
        },{
          id:3,
          image: require('../../assets/dress/dress_3_co_bu.png')
        }
      ];
      const jacket_data=[
        {
          id:1,
          image:require('../../assets/jacket/jacket_1_ca_co_bu.png')
        },
        {
          id:2,
          image: require('../../assets/jacket/jacket_2_ca_co_bu.png')
        },
        {
          id:3,
          image: require('../../assets/jacket/jacket_3_ca_co.png')
        }
      ];
      const footwear_data=[
        {
          id:1,
          image:require('../../assets/footwear/foot_1_ca_co.png')
        },
        {
          id:2,
          image:require('../../assets/footwear/foot_2_ca_sp.png')
        },
        {
          id:3,
          image:require('../../assets/footwear/foot_3_ca_sp.png')
        },
        {
          id:4,
          image:require('../../assets/footwear/foot_4_ca_co_bu.png')
        },
        {
          id:5,
          image:require('../../assets/footwear/foot_5_ca_sp.png')
        },
        {
          id:6,
          image:require('../../assets/footwear/foot_6_ca_co_sp.png')
        },
        {
          id:7,
          image:require('../../assets/footwear/foot_7_co_ca.png')
        }
      ];
      const accessories_data=[
        {
          id:1,
          image:require('../../assets/accessories/accessories_1_ca_co_bu.png')
        },
        {
          id:2,
          image:require('../../assets/accessories/accessories_2_sp.png')
        },
        {
          id:3,
          image:require('../../assets/accessories/accessories_3_co_bu.png')
        },
        {
          id:4,
          image:require('../../assets/accessories/accessories_4_co_bu.png')
        },
        {
          id:5,
          image:require('../../assets/accessories/accessories_5_bu.png')
        },
        {
          id:6,
          image:require('../../assets/accessories/accessories_6_ca.png')
        },
        {
          id:7,
          image:require('../../assets/accessories/accessories_7_ca_sp.png')
        }
      ];
      const casual_data=[
        {
          id:1,
          image:require('../../assets/casual/casual_1.png')
        },
        {
          id:2,
          image:require('../../assets/casual/casual_2.png')
        },
        {
          id:3,
          image:require('../../assets/casual/casual_3.png')
        },
        {
          id:4,
          image:require('../../assets/casual/casual_4.png')
        },
        {
          id:5,
          image:require('../../assets/casual/casual_5.png')
        }
      ];
      const cocktail_data=[
        {
          id:1,
          image:require('../../assets/cocktail/cocktail_1.png')
        },
        {
          id:2,
          image:require('../../assets/cocktail/cocktail_2.png')
        },
        {
          id:3,
          image:require('../../assets/cocktail/cocktail_3.png')
        }
      ];
      const business_data=[
        {
          id:1,
          image:require('../../assets/business/business_1.png')
        },
        {
          id:2,
          image:require('../../assets/business/business_2.png')
        }
      ];
      const sporty_data=[
        {
          id:1,
          image:require('../../assets/sporty/sporty_1.png')
        },
        {
          id:2,
          image:require('../../assets/sporty/sporty_2.png')
        },
        {
          id:3,
          image:require('../../assets/sporty/sporty_3.png')
        }
      ];
      const casual_save_data=[
        {
          id:3,
          image:require('../../assets/casual/casual_3.png')
        },
        {
          id:5,
          image:require('../../assets/casual/casual_5.png')
        }
      ];
      const cocktail_save_data=[
        
        {
          id:2,
          image:require('../../assets/cocktail/cocktail_2.png')
        },
      ];
      const business_save_data=[
        {
          id:1,
          image:require('../../assets/business/business_1.png')
        }
      ];
      const sporty_save_data=[
        {
          id:1,
          image:require('../../assets/sporty/sporty_1.png')
        }
      ];
export {top_data,bottomwear_data,dress_data,jacket_data,
  footwear_data,accessories_data, casual_data, cocktail_data, business_data, sporty_data,
casual_save_data,business_save_data,sporty_save_data,cocktail_save_data};