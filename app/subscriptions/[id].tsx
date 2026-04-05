import {View, Text} from  'react-native';
import React from 'react';
import {Link, useLocalSearchParams} from "expo-router";

const SubscriptionsDetails =()=>{
    const {id} = useLocalSearchParams<{id:string}>();
    return(
        <view>
            <Text>Subscription details</Text>
            <Link href="/">Go Back</Link>
        </view>
    )
}

export default SubscriptionsDetails;