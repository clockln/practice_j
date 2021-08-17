using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.IO;
using static System.Console;
using static System.Math;
 
public class Prob{
    static public int mod = 1000000007;
    static public string al = "abcdefghijklmnopqrstuvwxyz";
    public static void Main(){
        while(true){
            var s = ReadLine().Split('\t');
            
            Write("  [");
            
            Write($"\"{s[0]}\"");
            Write(",");
            Write($"17");
            if(s[1].Length == 1){
                Write("000");
            }
            if(s[1].Length == 2){
                Write("00");
            }
            if(s[1].Length == 3){
                Write("0");
            }
            s[1] = s[1].Replace("\"","\\\"");
            Write($"{s[1]}");
            Write(",");
            Write($"\"{s[2]}\"");
            Write(",");
            Write($"\"{s[3]}\"");
            Write(",");
            Write($"{s[4]}");
            Write(",");
            Write($"{s[5]}");
            Write(",");
            Write($"{s[6]}");
            Write(",");
            Write($"{s[7]}");
            Write(",");
            Write($"\"{s[8]}\"");
            Write(",");
            Write($"\"{s[9]}\"");
            Write(",");
            Write($"\"{s[10]}\"");
            Write(",");
            Write($"{s[11]}");
            Write(",");
            Write($"\"{s[12]}\"");
            Write(",");
            Write($"{s[13]}");
            Write(",");
            Write($"{s[14]}");
            Write(",");
            Write($"\"{s[15]}\"");
            Write(",");
            s[16] = s[16].Replace("\"","\\\"");
            Write($"\"{s[16]}\"");
            Write(",");
            s[17] = s[17].Replace("\"","\\\"");
            Write($"\"{s[17]}\"");
            Write(",");
            Write($"{s[18]}");
            Write(",");
            Write($"{s[19]}");
            Write(",");
            Write($"{s[20]}");
            Write(",");
            Write($"\"{s[21]}\"");
            Write(",");
            //Write($"{s[19]}");
            //Write(",");
            //Write($"{s[20]}");
            //Write(",");
            Write($"\"{s[24]}\"");
            Write(",");
            if(s[25] == "-" || s[25] == ""){
                s[25] = "\"-\"";
            }
            Write($"{s[25]}");
            Write(",");
            if(s[26] == "-" || s[26] == ""){
                s[26] = "\"-\"";
            }
            Write($"{s[26]}");
            Write(",");
            Write($"\"{s[27]}\"");
            Write(",");
            //Write($"{s[25]}");
            //Write(",");
            if(s[2] == "Ⅰ") Write("1");
            if(s[2] == "Ⅱ") Write("2");
            if(s[2] == "Ⅲ") Write("3");
            if(s[2] == "Ⅳ") Write("4");
            if(s[2] == "V") Write("5");
            if(s[2] == "Ⅵ") Write("6");
            if(s[2] == "Ⅶ") Write("7");
            if(s[2] == "Ⅷ") Write("8");
            if(s[2] == "Ⅸ") Write("9");
            if(s[2] == "Ⅹ") Write("10");
            Write(",");
            if(s[15].IndexOf("-") >= 0){
                Write("\"!!!!!!!!!!!!!!!!!!!\"");
            }else{
                Write(s[15]);
            }
            Write(",");
            if(s[21] == ""){
                Write("\"0\"");
            }else{
                var tempt = s[21].Split(':');
                tempt[0] = tempt[0].Replace("0","");
                var time = int.Parse(tempt[0])*60 + int.Parse(tempt[1]);
                Write(time);
            }
            
            WriteLine("],");
        }
        
	
	
    }
    public static void swap(ref int a,ref int b){int temp = a;a= b;b = temp;}
    static void charswap(ref char a,ref char b){char temp = a;a= b;b = temp;}
    static int ncr(int n,int r){if(n<r)return 0;r = Min(r,n-r);long nn = 1;for(int i=n-r+1;i<=n;i++){nn = nn*i%mod;}long rr = 1;for(int i=1;i<=r;i++){rr = rr*i%mod;}rr = square((int)rr,mod-2);nn = nn * rr %mod;return (int)nn;}
    // a^b mod
    static int square(int a,int b){string binary = Convert.ToString(b,2);int bileng = binary.Length;long a_power = a;long value = 1;for(int i=bileng-1;i>=0;i--){if(binary[i] == '1'){value = value*a_power%mod;}a_power = a_power*a_power%mod;}return (int)value;}
    static int square2(int a,int b){long output = 1;var list = new List<long>();int sh = 1;long n = a;list.Add(a);while(sh < b){sh *= 2;n = n*n%mod;list.Add(n);}for(int i=list.Count-1;i>=0;i--){if(b > sh){b -= sh;sh /= 2;output = output*list[i]%mod;}}return (int)output;}
    //各種読取
    static string rstr()   { return ReadLine(); }
    static int    rint()   { return int.Parse(ReadLine()); }
    static long   rlong()  { return long.Parse(ReadLine()); }
    static double rdouble(){ return double.Parse(ReadLine()); }
    static string[] stra()   { return ReadLine().Split(' '); }
    static int[]    inta()   { return Array.ConvertAll(stra(),x => int.Parse(x)); }
    static long[]   longa()  { return Array.ConvertAll(stra(),x => long.Parse(x)); }
    static double[] doublea(){ return Array.ConvertAll(stra(),x => double.Parse(x)); }
    static char[] chara(){ string[] a=stra();string b="";for(int i=0;i<a.Length;i++){b+=a[i];}return b.ToCharArray();}
    static int[,] inta2(int num_array,int in_array){ int[,] int_array2 = new int[num_array,in_array]; for(int i=0;i<num_array;i++){ int[] temp_array = inta(); for(int j=0;j<in_array;j++){ int_array2[i,j] = temp_array[j]; } } return int_array2; }
    // -----------------------------
    static long GCD(long a,long b){ if(a < b){ long temp = a; a = b; b = temp; } if(a % b == 0){ return b; } else{ long temp = b; b = a%b; a = temp; return GCD(a,b); } }
    static long LCM(long a,long b){ return a * b / GCD(a,b); }
    static void WriteArray(int[,] a,int b,int c){for(int i=0;i<b;i++){for(int j=0;j<c;j++){if(j!=0) Write(" ");Write(a[i,j]);}WriteLine();}}
}
