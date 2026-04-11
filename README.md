# Linux 파일 및 디렉토리 명령어

## 1. 기본 개념
리눅스에서는 모든 데이터를 **파일(File)**로 관리하며,  
디렉토리(Directory)는 파일을 저장하는 폴더 역할을 한다.

---

## 2. 현재 위치 확인

```bash
pwd
```

### 실행 결과
```bash
/home/user
```

- 현재 작업 중인 디렉토리의 전체 경로를 출력

---

## 3. 디렉토리 목록 확인

```bash
ls
```

### 실행 결과
```bash
file.txt  test/
```

#### 주요 옵션

```bash
ls -l     # 상세 정보 출력
ls -a     # 숨김 파일 포함 출력
ls -al    # 상세 정보 + 숨김 파일
```

### 실행 결과 (ls -al)
```bash
drwxr-xr-x 2 user user 4096 Jan 1 test
-rw-r--r-- 1 user user    0 Jan 1 file.txt
```

---

## 4. 디렉토리 이동

```bash
cd 디렉토리명
```

### 사용 예시

```bash
cd /home/user     # 절대 경로 이동
cd ..             # 상위 디렉토리 이동
cd ~              # 홈 디렉토리 이동
cd -              # 이전 디렉토리 이동
```

---

## 5. 디렉토리 생성

```bash
mkdir 디렉토리명
```

### 사용 예시

```bash
mkdir test
mkdir -p a/b/c    # 하위 디렉토리까지 한 번에 생성
```

---

## 6. 파일 생성

```bash
touch 파일명
```

### 사용 예시

```bash
touch file.txt
```

---

## 7. 파일 및 디렉토리 삭제

```bash
rm 파일명
```

### 사용 예시

```bash
rm file.txt
rm -r test         # 디렉토리 삭제
rm -f file.txt     # 강제 삭제
rm -rf test        # 강제 + 재귀 삭제 (주의)
```

> ⚠️ `rm -rf` 명령어는 매우 위험하므로 사용 시 주의해야 한다.

---

## 8. 파일 및 디렉토리 복사

```bash
cp 원본 대상
```

### 사용 예시

```bash
cp file.txt copy.txt
cp -r test backup/   # 디렉토리 복사
```

---

## 9. 파일 및 디렉토리 이동 / 이름 변경

```bash
mv 원본 대상
```

### 사용 예시

```bash
mv file.txt new.txt     # 이름 변경
mv new.txt /home/user/  # 파일 이동
```

---

## 10. 핵심 정리
- pwd: 현재 위치 확인
- ls: 파일 및 디렉토리 목록 확인
- cd: 디렉토리 이동
- mkdir: 디렉토리 생성
- touch: 파일 생성
- rm: 파일 및 디렉토리 삭제 (주의 필요)
- cp: 복사
- mv: 이동 및 이름 변경
