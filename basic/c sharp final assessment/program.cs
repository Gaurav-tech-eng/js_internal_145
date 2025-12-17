using System;

namespace HospitalManagementSystem
{
    // Enum to define Patient Types
    public enum PatientType
    {
        Regular,
        Insurance,
        Emergency
    }

    // 1. Delegate for Dynamic Billing Logic
    // This allows us to swap calculation logic easily
    public delegate double BillingStrategy(double baseAmount);

    // Custom arguments for the Event (to pass data to subscribers)
    public class BillEventArgs : EventArgs
    {
        public string PatientName { get; }
        public double FinalAmount { get; }
        public string DepartmentMessage { get; }

        public BillEventArgs(string name, double amount, string message)
        {
            PatientName = name;
            FinalAmount = amount;
            DepartmentMessage = message;
        }
    }

    // The Core System Logic
    public class HospitalSystem
    {
        // 2. Event Declaration using EventHandler
        public event EventHandler<BillEventArgs> OnBillGenerated;

        // Method to Admit and Process Patient (Flow Steps 1-6)
        public void ProcessPatientAdmission()
        {
            Console.Clear();
            Console.WriteLine("=== HOSPITAL PATIENT ADMISSION ===");

            // Step 1: Admit Patient (Get Details)
            Console.Write("Enter Patient Name: ");
            string name = Console.ReadLine();

            // Step 2: Select Patient Type
            Console.WriteLine("\nSelect Patient Type:");
            Console.WriteLine("1. Regular (Standard Fee)");
            Console.WriteLine("2. Insurance (10% Discount)");
            Console.WriteLine("3. Emergency (20% Surcharge)");
            Console.Write("Choice: ");
            
            PatientType type = PatientType.Regular;
            int choice = int.Parse(Console.ReadLine());
            
            BillingStrategy strategy = null;

            switch (choice)
            {
                case 1:
                    type = PatientType.Regular;
                    // Step 4: Apply Billing Strategy (Delegate assignment)
                    strategy = RegularBilling;
                    break;
                case 2:
                    type = PatientType.Insurance;
                    strategy = InsuranceBilling;
                    break;
                case 3:
                    type = PatientType.Emergency;
                    strategy = EmergencyBilling;
                    break;
                default:
                    Console.WriteLine("Invalid selection, defaulting to Regular.");
                    strategy = RegularBilling;
                    break;
            }

            // Step 3: Calculate Treatment Bill (Base Cost)
            Console.Write("\nEnter Base Treatment Cost: $");
            double baseCost = double.Parse(Console.ReadLine());

            // Step 5: Generate Bill using the Delegate
            double finalBill = strategy(baseCost);

            Console.WriteLine("\n---------------------------------");
            Console.WriteLine($"Patient: {name}");
            Console.WriteLine($"Type: {type}");
            Console.WriteLine($"Base Cost: ${baseCost}");
            Console.WriteLine($"Final Bill: ${finalBill}");
            Console.WriteLine("---------------------------------");

            // Step 6: Trigger Events and Notify Departments
            NotifyDepartments(name, finalBill);
        }

        // --- Billing Strategies (Methods matching the Delegate signature) ---
        
        private double RegularBilling(double amount)
        {
            return amount; // No change
        }

        private double InsuranceBilling(double amount)
        {
            return amount * 0.90; // 10% discount
        }

        private double EmergencyBilling(double amount)
        {
            return amount * 1.20; // 20% surcharge
        }

        // --- Notification Trigger ---
        protected virtual void NotifyDepartments(string name, double amount)
        {
            Console.WriteLine("\n[System]: Broadcasting updates to departments...\n");
            
            // Checking if anyone is subscribed to the event
            if (OnBillGenerated != null)
            {
                OnBillGenerated(this, new BillEventArgs(name, amount, "Processing payment and updating records."));
            }
        }
    }

    // --- Department Classes (Subscribers) ---

    class AccountsDepartment
    {
        public void OnBillReceived(object sender, BillEventArgs e)
        {
            Console.ForegroundColor = ConsoleColor.Green;
            Console.WriteLine($"[Accounts Dept]: Invoice generated for {e.PatientName}. Amount Due: ${e.FinalAmount}");
            Console.ResetColor();
        }
    }

    class AdministrationDepartment
    {
        public void OnBillReceived(object sender, BillEventArgs e)
        {
            Console.ForegroundColor = ConsoleColor.Cyan;
            Console.WriteLine($"[Admin Dept]: {e.PatientName} discharge papers are being prepared.");
            Console.ResetColor();
        }
    }

    // Main Program
    class Program
    {
        static void Main(string[] args)
        {
            // Create the System
            HospitalSystem hospital = new HospitalSystem();

            // Create Subscribers (Departments)
            AccountsDepartment accounts = new AccountsDepartment();
            AdministrationDepartment admin = new AdministrationDepartment();

            // Subscribe to the Events (Wiring up the system)
            hospital.OnBillGenerated += accounts.OnBillReceived;
            hospital.OnBillGenerated += admin.OnBillReceived;

            // Run the application loop
            bool running = true;
            while (running)
            {
                hospital.ProcessPatientAdmission();

                Console.WriteLine("\nProcess another patient? (y/n)");
                if (Console.ReadLine().ToLower() != "y")
                    running = false;
            }
        }
    }
}