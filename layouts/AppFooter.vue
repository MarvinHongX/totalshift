<script setup>
const { logoSecondaryUrl } = useImg();
</script>

<template>
    <div class="layout-footer">
        <div class="footer-content">
            <!-- 상단  -->
            <div class="content-top">
                <div class="flex flex-column">
                    <div class="flex flex-row">
                        <span class="mb-1">주식회사 토탈쉬프트</span>
                    </div>
                    <div class="flex flex-row">
                        <span class="mb-1">사업자등록번호 : 680-87-01918 </span>
                    </div>
                    <div class="flex flex-row">
                        <span class="mb-4">주소 : 서울 금천구 가산로9길 66 더리즌밸리 501 ~ 507호</span>
                    </div>
                    <div class="flex flex-row">
                        <span class="mb-1">이메일 : info@totalshift.co.kr</span>
                    </div>
                    <div class="flex flex-row">
                        <span class="mb-1">전화 : 02-6215-3891</span>
                    </div>
                </div>
                <div class="footer-logo">
                    <NuxtImg format="webp" :src="logoSecondaryUrl" alt="logo-secondary" />
                </div>

            </div>
            <!-- 구분선 -->
            <div class="footer-separator"></div>
            <!-- 하단 -->
            <div class="footer-copyright">
                Copyright ⓒ 2024 Total Shift Inc. All rights reserved
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
