<template>
    <div class="bg-light min-vh-100 d-flex flex-row align-items-center">
        <CContainer>
            <CRow class="justify-content-center">
                <CCol :md="8">
                    <CCardGroup>
                        <CCard class="p-4">
                            <CCardBody>
                                <CForm>
                                    <h1>Login</h1>
                                    <p class="text-medium-emphasis">Gunakan Akun Warga BPKP</p>
                                    <CInputGroup class="mb-3">
                                        <CInputGroupText>
                                            <CIcon icon="cil-user" />
                                        </CInputGroupText>
                                        <CFormInput type="email" placeholder="nama@bpkp.go.id"
                                            aria-describedby="exampleFormControlInputHelpInline">

                                        </CFormInput>

                                    </CInputGroup>
                                    <CInputGroup class="mb-4">
                                        <CInputGroupText>
                                            <CIcon icon="cil-lock-locked" />
                                        </CInputGroupText>
                                        <CFormInput type="password" placeholder="Password"
                                            autocomplete="current-password" />
                                    </CInputGroup>
                                    <CRow>
                                        <CCol :xs="6">
                                            <CButton color="primary" class="px-4"> Login </CButton>
                                        </CCol>
                                    </CRow>
                                </CForm>
                            </CCardBody>
                        </CCard>
                        <CCard class="text-white bg-primary py-5" style="width: 44%">
                            <CCardBody class="text-center">
                                <div>
                                    <h2>Sign up</h2>
                                    <p>
                                        Selamat Datang di Aplikasi Evaluasi Internal Kearsipan BPKP
                                    </p>
                                    <CButton color="light" variant="outline" class="mt-3">
                                        Register Now!
                                    </CButton>
                                </div>
                            </CCardBody>
                        </CCard>
                    </CCardGroup>
                </CCol>
            </CRow>
        </CContainer>
    </div>
</template>

<script>
export default {
    name: 'Login',
}
</script>