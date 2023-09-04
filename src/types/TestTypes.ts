export interface TestEntity {
    uid: string,
}

export interface VerifyProps {
    action?: (params?: any) => void,
    args?: any
}