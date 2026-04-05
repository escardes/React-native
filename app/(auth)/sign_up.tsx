import {View, Text} from "react-native";
import '@/global.css';
import {Link} from "expo-router";

const SignUp = () => {
    return(
        <View>
            <Text className="text-xl font-bold text-success">Sign Up</Text>
            <Link href="/(auth)/sign_in">Sign In</Link>
        </View>
    );
}

export default SignUp;