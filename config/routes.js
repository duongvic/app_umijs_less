const routes = [
  {
    path: '/change_email',
    component: '../pages/public/change_email',
  },
  {
    path: '/login/verify',
    component: '../layouts/auth',
    routes: [{ path: '/login/verify', component: '../pages/auth/RedirectAuthVerify' }],
  },
  {
    path: '/login',
    component: '../layouts/auth',
    routes: [{ path: '/login', component: '../pages/auth/LoginForm' }],
  },
  {
    path: '/register/invite',
    component: '../layouts/auth',
    routes: [{ path: '/register/invite', component: '../pages/auth/RegisterInviteForm' }],
  },
  // {
  //   path: '/register/invite_success',
  //   component: '../layouts/auth',
  //   routes: [
  //     { path: '/register/invite_success', component: '../pages/auth/RegisterInviteSuccess' },
  //   ],
  // },
  {
    path: '/register',
    component: '../layouts/auth',
    routes: [{ path: '/register', component: '../pages/auth/RegisterForm' }],
  },
  {
    path: '/register_success',
    component: '../layouts/auth',
    routes: [{ path: '/register_success', component: '../pages/auth/RegisterSuccess' }],
  },
  {
    path: '/register_verify_success',
    component: '../layouts/auth',
    routes: [
      { path: '/register_verify_success', component: '../pages/auth/RegisterVerifySuccess' },
    ],
  },
  {
    path: '/register_verify_failed',
    component: '../layouts/auth',
    routes: [{ path: '/register_verify_failed', component: '../pages/auth/RegisterVerifyFailed' }],
  },
  {
    path: '/register_verify_timeout',
    component: '../layouts/auth',
    routes: [
      { path: '/register_verify_timeout', component: '../pages/auth/RegisterVerifyTimeout' },
    ],
  },
  {
    path: '/register_verify',
    component: '../layouts/auth',
    routes: [{ path: '/register_verify', component: '../pages/auth/RegisterVerify' }],
  },
  {
    path: '/forgot_password',
    component: '../layouts/auth',
    routes: [{ path: '/forgot_password', component: '../pages/auth/ForgotPasswordForm' }],
  },
  {
    path: '/forgot_password_success',
    component: '../layouts/auth',
    routes: [
      { path: '/forgot_password_success', component: '../pages/auth/ForgotPasswordSuccess' },
    ],
  },
  {
    path: '/change_password',
    component: '../layouts/auth',
    routes: [{ path: '/change_password', component: '../pages/auth/ChangePasswordForm' }],
  },
  {
    path: '/change_password_success',
    component: '../layouts/auth',
    routes: [
      { path: '/change_password_success', component: '../pages/auth/ChangePasswordSuccess' },
    ],
  },
  {
    path: '/verify_sub_domain',
    component: '../layouts/home',
    routes: [{ path: '/verify_sub_domain', component: '../pages/verify_sub_domain' }],
  },
  {
    path: '/change_email_success',
    component: '../layouts/auth',
    routes: [{ path: '/change_email_success', component: '../pages/auth/ChangeEmailFormSuccess' }],
  },
  {
    path: '/change_email_failed',
    component: '../layouts/auth',
    routes: [{ path: '/change_email_failed', component: '../pages/auth/ChangeEmailFormFailed' }],
  },

  {
    path: '/',
    component: '../layouts/home',
    routes: [
      { path: '/', component: '../pages/index' },
      { path: '/product', component: '../pages/home' },
      { path: '/profile', component: '../pages/profile' },
      { path: '/profile_detail', component: '../pages/profile_detail' },
    ],
  },
];

export default routes;
