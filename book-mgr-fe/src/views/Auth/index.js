import { defineComponent, reactive, ref } from 'vue';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons-vue';
import { auth } from '@/service';


export default defineComponent({
    // 组件要注册后才能使用(Ant里面的)
    components: {
        UserOutlined,
        LockOutlined,
        MailOutlined,
    },
    setup() {
        const regForm = reactive({
            account: '',
            password: '',
        });

        const register = () => {
            auth.register(regForm.account, regForm.password);
        };

        return {
            regForm,
            register,
        };

    },
});