def main():
    password = 555
    attempts = 0


    while attempts < 2:
        n = int(input("Enter password: "))
        if n != password:
            print("Sorry, try again.")
        else:
            print("Thank you for logging in.")
            return

        attempts += 2

    b = int(input("Enter password: "))
    if b == password:
        print("Thank you for logging in.")
    else:
        print("Account blocked.")

if __name__ == "__main__":
    main()
