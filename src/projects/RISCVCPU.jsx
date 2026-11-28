import "./projects.css";
import ProjectHeader from "../components/ProjectHeader";
import Grid from "../components/Grid";

export default function RISCVCPU() {
  return (
    <main>
      <ProjectHeader
        title="RISC-V Like CPU"
        image="/img/RISCVCPU/DigitalDesign.png"
        timeline="January 2026 – April 2026"
        tools={["Vivado", "System Verilog", "Xilinx FPGA"]}
      />

      <section className="project-block">
        <h2 className="section-heading">Purpose</h2>
        <p>
          This project consisted of building a 16-bit single-cycle CPU in
          SystemVerilog and running it on a Xilinx Zynq FPGA (PYNQ-Z2). It runs
          a custom 16-bit instruction set modeled on a RISC-V. This includes a
          load/store architecture with a 4-bit opcode and twelve instructions
          covering arithmetic, logic gates, shifts, memory access, and branches.
          Each block was simulated and verified in Vivado simulation before
          being tested on the board with VIO and a seven-segment display. As a
          final test, the finished CPU ran a signed multiplication program
          written in assembly.
        </p>
      </section>

      <section className="project-block">
        <h2 className="section-heading">Design Process</h2>

        <div className="project-part">
          <h3 className="subheading">16-bit Adder</h3>
          <div className="part-body">
            Everything starts with the 16-bit signed adder. It takes two 16-bit
            inputs and returns their 16-bit sum, along with an overflow flag
            that gets set to 1 when the result falls outside the signed range. I
            simulated it against a set of edge cases, then checked it on the
            board, with the sum on the seven-segment display and the overflow
            flag on an LED.
          </div>
        </div>
        <div className="project-part">
          <h3 className="subheading">ALU</h3>
          <div className="part-body">
            The ALU builds upon the adder and allows a 4-bit select input to be
            picked to choose which operation to do. This includes add, invert,
            AND, OR, XOR, arithmetic shift right, and logical shift left. In
            addition to the 16-bit result, it outputs an overflow flag and a
            take_branch flag, which will later tell the CPU whether a beqz or
            bnez branch should be taken.
            <img
              src="/img/RISCVCPU/ALUOperations.png"
              style={{ height: "250px", width: "auto" }}
            />
          </div>
        </div>
        <div className="project-part">
          <h3 className="subheading">Processor Data Path</h3>
          <div className="part-body">
            The datapath connects the ALU to a register file, a zero register,
            and a pair of multiplexers that choose what the ALU operates on.
            <br />
            <br />
            The register file holds eight 16-bit registers, with two read ports
            and one write port. It reads two registers at once, each selected by
            a 3-bit address, and on a clock edge with register write enabled, it
            writes 16 bits of data to a third address. Reset clears every
            register.
            <br />
            <br />
            Each read port feeds a 2 to 1 multiplexer. The ALUSrc1 and ALUSrc2
            control signals decide whether each ALU input comes from the
            register file or from another source. The other source would be from
            a zero register or an immediate value. This allows it so that a
            single ALU can handle register to register operations, immediate
            operations, and comparisons against zero.
          </div>
        </div>
        <div className="project-part">
          <h3 className="subheading">Memory Path</h3>
          <div className="part-body">
            Eight registers cannot hold lots of information, and the CPU will
            require more memory. This means adding a data memory at the cost of
            time, since it is slower to reach than the register file. This lets
            the program store register values (sw) and load them back later
            (lw).
            <br />
            <br />
            The data memory is a 1024 x 16-bit single-port RAM generated with
            Vivado's distributed memory IP. It has a clock, a write enable, an
            address shared by reads and writes, a data input, and a data output.
            The ALU computes the memory address, and a new multiplexer before
            the register file chooses whether a register is written with the ALU
            result or with the value loaded from memory.
          </div>
        </div>
        <div className="project-part">
          <h3 className="subheading">Instruction Decoder</h3>
          <div className="part-body">
            Until now, every control signal was set by hand. The instruction
            decoder will generate that automatically by reading an instruction
            and configuring the datapath in order to execute it.
            <br />
            <br />
            The decoder is a combinational case statement with one case per
            opcode: lw, sw, add, addi, and, andi, or, xor, srai, slli, beqz, and
            bnez. Its inputs are the 4-bit opcode plus the instruction's 7-bit
            immediate, 6-bit nonzero immediate, and 9-bit offset fields. Each
            case sets the 4-bit ALU operation, the 16-bit immediate value, and
            the 1-bit controls for register write, register destination, ALU
            sources, memory write, memory-to-register, and register source.
            Together, these signals determine how data moves between the
            register file, memory, and ALU.
            <br />
            <br />
            In addition to the instruction decoder, I also added a debounced
            push button as the CPU's clock, so a program can be stepped through
            one instruction at a time and checked at each step.
            <img
              src="/img/RISCVCPU/InstructionSet.png"
              style={{ height: "400px", width: "auto" }}
            />
          </div>
        </div>
        <div className="project-part">
          <h3 className="subheading">Instruction Memory and Program Counter</h3>
          <div className="part-body">
            To run a program on its own, the CPU needs somewhere to store
            instructions and a way to keep track of which one comes next. The
            instruction memory holds the program, and the program counter (PC)
            holds the address of the current instruction.
            <br />
            <br />
            The instruction memory is a 256 x 16-bit ROM generated with Vivado's
            distributed memory IP and loaded from a .coe file. Each 16-bit
            instruction is split into its fields (rs1, rs2, rd, immediate,
            nonzero immediate, offset, and opcode) and passed to the decoder.
            The PC is an 8-bit register that resets to 0 and moves to the next
            instruction on each press of the step button.
            <br />
            <br />
            To test it, I loaded a short sequence of instructions and stepped
            through them, checking the register and memory values after each
            one. An example is shown below:
            <Grid
              items={[
                {
                  src: "/img/RISCVCPU/addi 3,3,11.png",
                  title: "PC = 0, addi 3, 3, 11",
                },
                {
                  src: "/img/RISCVCPU/sw 3,4(2).png",
                  title: "PC = 1, sw 3, 4(2)",
                },
                {
                  src: "/img/RISCVCPU/addi 4,4,3.png",
                  title: "PC = 2, addi 4, 4, 3",
                },
                {
                  src: "/img/RISCVCPU/sw 4,16(2).png",
                  title: "PC = 3,  sw 4, 16(2)",
                },
                {
                  src: "/img/RISCVCPU/srai 4,4,0.png",
                  title: "PC = 4,  srai 4, 4, 0",
                },
                {
                  src: "/img/RISCVCPU/lw 2,4(1).png",
                  title: "PC = 5,  lw 2, 4(1)",
                },
                {
                  src: "/img/RISCVCPU/or 2,2,4.png",
                  title: "PC = 6,  or 2, 2, 4",
                },
                {
                  src: "/img/RISCVCPU/lw 0,16(5).png",
                  title: "PC = 7, lw 0, 16(5)",
                },
                {
                  src: "/img/RISCVCPU/and 0,0,2.png",
                  title: "PC = 8, and 0, 0, 2",
                },
              ]}
            />
          </div>
        </div>
        <div className="project-part">
          <h3 className="subheading">Branching Logic</h3>
          <div className="part-body">
            Branches are what let a program loop and make decisions. I increased
            the PC to 9 bits and changed its update logic so that when the ALU
            raises take_branch, the next PC is the current PC plus a signed
            offset from the instruction. If the take_branch is low, then it
            moves to the next instruction. The decoder also now sign-extends
            immediates, so negative values and backward branches work.
          </div>
        </div>
        <div className="project-part">
          <h3 className="subheading">Final Result</h3>
          <div className="part-body">
            With branching in place, the CPU was complete. In order to prove it
            worked, I wrote a signed multiplier in its assembly language. It
            multiplies two 8-bit two's complement numbers using a loop of
            branches and up/down counters, and it gave correct results on the
            board. Below is the final block diagram.
            <img
              src="/img/RISCVCPU/BlockDiagram.png"
              style={{ height: "500px", width: "auto" }}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
