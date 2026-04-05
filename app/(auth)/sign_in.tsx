import {View, Text} from "react-native";
import '@/global.css';
import {Link} from "expo-router";

const SignIn = () => {
    return(
        <View>
            <Text className="text-xl font-bold text-success">Sign In</Text>
            <Link href="/(auth)/sign_up">Create Account</Link>
        </View>
    );
}

export default SignIn;